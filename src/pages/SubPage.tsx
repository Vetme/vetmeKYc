import { useEffect, useState } from "react";
import { Flex } from "../components";
import HomeLayout from "../components/layout/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import LayeredBtn from "../components/utils/LayeredBtn";
import abi from "../lib/abi/paymentAbi.json";
import ercAbi from "../lib/abi/erc20.json";
import { parseUnits } from "ethers";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig, useAccount, useChainId } from "wagmi";
import { arbitrum, mainnet, polygon, goerli } from "wagmi/chains";
import { Contract } from "ethers";
import { useEthersProvider } from "../hooks/useProvider";
import { useEthersSigner } from "../hooks/useSigner";
import { createSub } from "../service/kyc.service";
import { renderSuccess } from "../service/alert.service";
import { PAYMENT_CONTRACT, PAYMENT_TOKEN } from "../lib/constants";

const chains = [arbitrum, mainnet, polygon, goerli];
const projectId = "a35f07741bf8cfbc568113c9cd6f316f";

// const getContract = (
//   abi: ContractInterface,
//   contract_address: string,
//   chain: Blockchain,
//   provider?: Web3Provider
// ): Contract => {
//   const defaultProvider = readOnlyProvider(select_rpc_url(chain));
//   return new Contract(contract_address, abi, provider ?? defaultProvider);
// };

const SubPage = () => {
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  return (
    <HomeLayout>
      <WagmiConfig config={wagmiConfig}>
        <SubscriptionCon />
      </WagmiConfig>

      <div style={{ position: "relative", zIndex: 999999 }}>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
    </HomeLayout>
  );
};

export const SubscriptionCon = () => {
  const { open, close } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramField = query.get("sub");
  const total = paramField == "regular" ? 500 : 1000;
  const signer = useEthersSigner();
  const provider = useEthersProvider();
  const [allowance, setAllowance] = useState<number>(0);
  let navigate = useNavigate();

  const handlePay = async () => {
    try {
      const contract = new Contract(PAYMENT_CONTRACT, abi, signer);

      const amount = parseUnits("500", 6);
      const tx = await contract.receiveBasicTokens(amount);
      const receipt = await tx.wait();
      const data = {
        hash: receipt.hash,
        sub: paramField,
        chain: chainId,
      };
      await createSub(data);
      renderSuccess("Your transaction has been successfully submitted!");
      navigate("/process");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllowance();
  }, [address]);

  const isApproved = (allowance: number) => {
    if (allowance < total) return false;
    return true;
  };

  const getAllowance = async () => {
    const contract = new Contract(PAYMENT_TOKEN, ercAbi, provider);

    if (!address) return;

    const allowance = await contract.allowance(address, PAYMENT_CONTRACT);
    setAllowance(allowance.toString());
  };

  const approve = async () => {
    const contract = new Contract(PAYMENT_TOKEN, ercAbi, signer);

    try {
      const amount = parseUnits(total.toString(), 6);

      const tx = await contract.approve(PAYMENT_CONTRACT, amount);

      const receipt = await tx.wait();
      getAllowance();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-[400px] ">
      <div className="w-[340px] border rounded-[20px] border-[#170728] m-auto p-8 top-[200px] relative">
        <Flex wrap justify="space-between" gap={40}>
          <div>Total</div>
          <div>${total}</div>
        </Flex>

        <br />
        {isConnected ? (
          isApproved(allowance) ? (
            <LayeredBtn
              lDir="right"
              bgColor="#FBF2FF"
              width="147px"
              height="46px"
              onClick={() => handlePay()}
              parentClassNames="w-auto"
            >
              <span className="text-[#170728] text-[0.87em]">Pay </span>
            </LayeredBtn>
          ) : (
            <LayeredBtn
              lDir="right"
              bgColor="#FBF2FF"
              width="147px"
              height="46px"
              onClick={() => approve()}
              parentClassNames="w-auto"
            >
              <span className="text-[#170728] text-[0.87em]">Approve </span>
            </LayeredBtn>
          )
        ) : (
          <LayeredBtn
            lDir="right"
            bgColor="#FBF2FF"
            width="147px"
            height="46px"
            onClick={() => open()}
            parentClassNames="w-auto"
          >
            <span className="text-[#170728] text-[0.87em]">
              Connect Wallet{" "}
            </span>
          </LayeredBtn>
        )}
      </div>
    </div>
  );
};
export default SubPage;
