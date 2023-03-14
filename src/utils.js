import { ethers } from "ethers";

export function isSpanish(i18n) {
  return i18n.language.indexOf("es") === 0;
}

export function base64(text) {
  //   const b = Buffer.from(text);
  //   const b64 = b.toString("base64");
  return btoa(text);
}

export const signMessage = async ({ message }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
