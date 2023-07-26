import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.providers = this.providers.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.uniquePaymentStorageClientProvider = this.uniquePaymentStorageClientProvider.bind(this);
    this.uniquePaymentStorageClientProviderAll = this.uniquePaymentStorageClientProviderAll.bind(this);
    this.providerPaymentStorage = this.providerPaymentStorage.bind(this);
    this.providerPaymentStorageAll = this.providerPaymentStorageAll.bind(this);
    this.epochPayments = this.epochPayments.bind(this);
    this.epochPaymentsAll = this.epochPaymentsAll.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/pairing/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of Providers items. */
  async providers(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.showFrozen) !== "undefined") {
      options.params.showFrozen = params.showFrozen;
    }
    const endpoint = `lavanet/lava/pairing/providers/${params.chainID}`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a list of GetPairing items. */
  async getPairing(params) {
    const endpoint = `lavanet/lava/pairing/get_pairing/${params.chainID}/${params.client}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of VerifyPairing items. */
  async verifyPairing(params) {
    const endpoint = `lavanet/lava/pairing/verify_pairing/${params.chainID}/${params.client}/${params.provider}/${params.block}`;
    return await this.req.get(endpoint);
  }
  /* Queries a UniquePaymentStorageClientProvider by index. */
  async uniquePaymentStorageClientProvider(params) {
    const endpoint = `lavanet/lava/pairing/unique_payment_storage_client_provider/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of UniquePaymentStorageClientProvider items. */
  async uniquePaymentStorageClientProviderAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/unique_payment_storage_client_provider`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a ProviderPaymentStorage by index. */
  async providerPaymentStorage(params) {
    const endpoint = `lavanet/lava/pairing/provider_payment_storage/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of ProviderPaymentStorage items. */
  async providerPaymentStorageAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/provider_payment_storage`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a EpochPayments by index. */
  async epochPayments(params) {
    const endpoint = `lavanet/lava/pairing/epoch_payments/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of EpochPayments items. */
  async epochPaymentsAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/pairing/epoch_payments`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a UserEntry items. */
  async userEntry(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.block) !== "undefined") {
      options.params.block = params.block;
    }
    const endpoint = `lavanet/lava/pairing/user_entry/${params.address}/${params.chainID}`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a list of StaticProvidersList items. */
  async staticProvidersList(params) {
    const endpoint = `lavanet/lava/pairing/static_providers_list/${params.chainID}`;
    return await this.req.get(endpoint);
  }
}