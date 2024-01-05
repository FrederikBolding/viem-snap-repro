import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const onRpcRequest: OnRpcRequestHandler = async () => {
  // 1. Import modules.

  // 2. Set up your client with desired chain & transport.
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  // 3. Consume an action!
  const blockNumber = await client.getBlockNumber();

  return blockNumber;
};
