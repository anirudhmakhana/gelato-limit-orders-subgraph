import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DepositToken } from "../generated/schema"
import { DepositToken as DepositTokenEvent } from "../generated/GelatoPineCore/GelatoPineCore"
import { handleDepositToken } from "../src/gelato-pine-core"
import { createDepositTokenEvent } from "./gelato-pine-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let key = Bytes.fromI32(1234567890)
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let module = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let inputToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let witness = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let data = Bytes.fromI32(1234567890)
    let secret = Bytes.fromI32(1234567890)
    let newDepositTokenEvent = createDepositTokenEvent(
      key,
      caller,
      amount,
      module,
      inputToken,
      owner,
      witness,
      data,
      secret
    )
    handleDepositToken(newDepositTokenEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositToken created and stored", () => {
    assert.entityCount("DepositToken", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "key",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "module",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "inputToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "witness",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "secret",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
