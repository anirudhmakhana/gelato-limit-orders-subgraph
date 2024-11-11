import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DepositToken } from "../generated/GelatoPineCore/GelatoPineCore"

export function createDepositTokenEvent(
  key: Bytes,
  caller: Address,
  amount: BigInt,
  module: Address,
  inputToken: Address,
  owner: Address,
  witness: Address,
  data: Bytes,
  secret: Bytes
): DepositToken {
  let depositTokenEvent = changetype<DepositToken>(newMockEvent())

  depositTokenEvent.parameters = new Array()

  depositTokenEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("module", ethereum.Value.fromAddress(module))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam(
      "inputToken",
      ethereum.Value.fromAddress(inputToken)
    )
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("witness", ethereum.Value.fromAddress(witness))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  depositTokenEvent.parameters.push(
    new ethereum.EventParam("secret", ethereum.Value.fromFixedBytes(secret))
  )

  return depositTokenEvent
}
