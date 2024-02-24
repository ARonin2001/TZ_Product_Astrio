export interface ConfigValue {
  label: string;
  value_index: number;
  value: string;
}

export interface IConfigurableOptions {
  attribute_id: number;
  attribute_code: string;
  label: string;
  values: ConfigValue[];
}

export interface IVariant {
  attributes: [
    {
      code: string;
      value_index: number;
    }
  ];
  product: {
    id: number;
    sku: string;
    image: string;
  };
}

export interface IProduct {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number | string;
}

export interface IProductConfigurable
  extends IProduct,
    IConfigurableOptions,
    IVariant {
  configurable_options: IConfigurableOptions[];
  variants: IVariant[];
}
