// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class DepositETH extends ethereum.Event {
  get params(): DepositETH__Params {
    return new DepositETH__Params(this);
  }
}

export class DepositETH__Params {
  _event: DepositETH;

  constructor(event: DepositETH) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OrderCancelled extends ethereum.Event {
  get params(): OrderCancelled__Params {
    return new OrderCancelled__Params(this);
  }
}

export class OrderCancelled__Params {
  _event: OrderCancelled;

  constructor(event: OrderCancelled) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _inputToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _witness(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OrderExecuted extends ethereum.Event {
  get params(): OrderExecuted__Params {
    return new OrderExecuted__Params(this);
  }
}

export class OrderExecuted__Params {
  _event: OrderExecuted;

  constructor(event: OrderExecuted) {
    this._event = event;
  }

  get _key(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _inputToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _witness(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get _auxData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _bought(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class GelatoPineCore__decodeOrderResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: Bytes;
  value5: Bytes;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: Bytes,
    value5: Bytes,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBytes(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    return map;
  }

  getModule(): Address {
    return this.value0;
  }

  getInputToken(): Address {
    return this.value1;
  }

  getOwner(): Address {
    return this.value2;
  }

  getWitness(): Address {
    return this.value3;
  }

  getData(): Bytes {
    return this.value4;
  }

  getSecret(): Bytes {
    return this.value5;
  }
}

export class GelatoPineCore extends ethereum.SmartContract {
  static bind(address: Address): GelatoPineCore {
    return new GelatoPineCore("GelatoPineCore", address);
  }

  ETH_ADDRESS(): Address {
    let result = super.call("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);

    return result[0].toAddress();
  }

  try_ETH_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  canExecuteOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _auxData: Bytes,
  ): boolean {
    let result = super.call(
      "canExecuteOrder",
      "canExecuteOrder(address,address,address,address,bytes,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_auxData),
      ],
    );

    return result[0].toBoolean();
  }

  try_canExecuteOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _auxData: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canExecuteOrder",
      "canExecuteOrder(address,address,address,address,bytes,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_auxData),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decodeOrder(_data: Bytes): GelatoPineCore__decodeOrderResult {
    let result = super.call(
      "decodeOrder",
      "decodeOrder(bytes):(address,address,address,address,bytes,bytes32)",
      [ethereum.Value.fromBytes(_data)],
    );

    return new GelatoPineCore__decodeOrderResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBytes(),
      result[5].toBytes(),
    );
  }

  try_decodeOrder(
    _data: Bytes,
  ): ethereum.CallResult<GelatoPineCore__decodeOrderResult> {
    let result = super.tryCall(
      "decodeOrder",
      "decodeOrder(bytes):(address,address,address,address,bytes,bytes32)",
      [ethereum.Value.fromBytes(_data)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GelatoPineCore__decodeOrderResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBytes(),
        value[5].toBytes(),
      ),
    );
  }

  encodeEthOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
  ): Bytes {
    let result = super.call(
      "encodeEthOrder",
      "encodeEthOrder(address,address,address,address,bytes,bytes32):(bytes)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_secret),
      ],
    );

    return result[0].toBytes();
  }

  try_encodeEthOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodeEthOrder",
      "encodeEthOrder(address,address,address,address,bytes,bytes32):(bytes)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_secret),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  encodeTokenOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
    _amount: BigInt,
  ): Bytes {
    let result = super.call(
      "encodeTokenOrder",
      "encodeTokenOrder(address,address,address,address,bytes,bytes32,uint256):(bytes)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_secret),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );

    return result[0].toBytes();
  }

  try_encodeTokenOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
    _secret: Bytes,
    _amount: BigInt,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encodeTokenOrder",
      "encodeTokenOrder(address,address,address,address,bytes,bytes32,uint256):(bytes)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromFixedBytes(_secret),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ethDeposits(param0: Bytes): BigInt {
    let result = super.call("ethDeposits", "ethDeposits(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);

    return result[0].toBigInt();
  }

  try_ethDeposits(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ethDeposits",
      "ethDeposits(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  existOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): boolean {
    let result = super.call(
      "existOrder",
      "existOrder(address,address,address,address,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );

    return result[0].toBoolean();
  }

  try_existOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "existOrder",
      "existOrder(address,address,address,address,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  keyOf(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): Bytes {
    let result = super.call(
      "keyOf",
      "keyOf(address,address,address,address,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );

    return result[0].toBytes();
  }

  try_keyOf(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "keyOf",
      "keyOf(address,address,address,address,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  vaultOfOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): Address {
    let result = super.call(
      "vaultOfOrder",
      "vaultOfOrder(address,address,address,address,bytes):(address)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );

    return result[0].toAddress();
  }

  try_vaultOfOrder(
    _module: Address,
    _inputToken: Address,
    _owner: Address,
    _witness: Address,
    _data: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "vaultOfOrder",
      "vaultOfOrder(address,address,address,address,bytes):(address)",
      [
        ethereum.Value.fromAddress(_module),
        ethereum.Value.fromAddress(_inputToken),
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_witness),
        ethereum.Value.fromBytes(_data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _inputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _witness(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class DepositEthCall extends ethereum.Call {
  get inputs(): DepositEthCall__Inputs {
    return new DepositEthCall__Inputs(this);
  }

  get outputs(): DepositEthCall__Outputs {
    return new DepositEthCall__Outputs(this);
  }
}

export class DepositEthCall__Inputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DepositEthCall__Outputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }
}

export class ExecuteOrderCall extends ethereum.Call {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _inputToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _signature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _auxData(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }
}
