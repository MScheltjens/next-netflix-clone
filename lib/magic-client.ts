import { Magic } from "magic-sdk";

const createMagicClient = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string)
  );
};
export const magic = createMagicClient();
