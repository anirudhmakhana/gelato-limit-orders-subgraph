// import { DepositToken as DepositTokenEvent } from "../generated/GelatoPineCore/GelatoPineCore"
// import { DepositToken } from "../generated/schema"

// export function handleDepositToken(event: DepositTokenEvent): void {
//   let entity = new DepositToken(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.key = event.params.key
//   entity.caller = event.params.caller
//   entity.amount = event.params.amount
//   entity.module = event.params.module
//   entity.inputToken = event.params.inputToken
//   entity.owner = event.params.owner
//   entity.witness = event.params.witness
//   entity.data = event.params.data
//   entity.secret = event.params.secret

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
