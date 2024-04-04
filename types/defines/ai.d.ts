declare type AiTask = {
  tensors: Array<Tensor<any>>;
  preProcessedInputs: any;
  postProcessedOutputs: any;
  schema: any;
  preProcessing: CallableFunction;
  generateTensors: CallableFunction;
  postProcessing: CallableFunction;
  postProcessingStream?: CallableFunction;
};
declare type AiImageClassificationInput = {
  image: number[];
};
declare type AiImageClassificationOutput = {
  score?: number;
  label?: string;
}[];
declare class AiImageClassification implements AiTask {
  private modelSettings;
  inputs: AiImageClassificationInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiImageClassificationOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      oneOf: (
        | {
            type: string;
            format: string;
            properties?: undefined;
          }
        | {
            type: string;
            properties: {
              image: {
                type: string;
                items: {
                  type: string;
                };
              };
            };
            format?: undefined;
          }
      )[];
    };
    output: {
      type: string;
      contentType: string;
      items: {
        type: string;
        properties: {
          score: {
            type: string;
          };
          label: {
            type: string;
          };
        };
      };
    };
  };
  constructor(inputs: AiImageClassificationInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiImageToTextInput = {
  image: number[];
  prompt?: string;
  max_tokens?: number;
};
declare type AiImageToTextOutput = {
  description: string;
};
declare class AiImageToText implements AiTask {
  private modelSettings;
  inputs: AiImageToTextInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiImageToTextOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      oneOf: (
        | {
            type: string;
            format: string;
            properties?: undefined;
          }
        | {
            type: string;
            properties: {
              image: {
                type: string;
                items: {
                  type: string;
                };
              };
              prompt: {
                type: string;
              };
              max_tokens: {
                type: string;
                default: number;
              };
            };
            format?: undefined;
          }
      )[];
    };
    output: {
      type: string;
      contentType: string;
      properties: {
        description: {
          type: string;
        };
      };
    };
  };
  constructor(inputs: AiImageToTextInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiObjectDetectionInput = {
  image: number[];
};
declare type AiObjectDetectionOutput = {
  score?: number;
  label?: string;
}[];
declare class AiObjectDetection implements AiTask {
  private modelSettings;
  inputs: AiObjectDetectionInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiObjectDetectionOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      oneOf: (
        | {
            type: string;
            format: string;
            properties?: undefined;
          }
        | {
            type: string;
            properties: {
              image: {
                type: string;
                items: {
                  type: string;
                };
              };
            };
            format?: undefined;
          }
      )[];
    };
    output: {
      type: string;
      contentType: string;
      items: {
        type: string;
        properties: {
          score: {
            type: string;
          };
          label: {
            type: string;
          };
          box: {
            type: string;
            properties: {
              xmin: {
                type: string;
              };
              ymin: {
                type: string;
              };
              xmax: {
                type: string;
              };
              ymax: {
                type: string;
              };
            };
          };
        };
      };
    };
  };
  constructor(inputs: AiObjectDetectionInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiSentenceSimilarityInput = {
  source: string;
  sentences: string[];
};
declare type AiSentenceSimilarityOutput = number[];
declare class AiSentenceSimilarity implements AiTask {
  private modelSettings;
  inputs: AiSentenceSimilarityInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiSentenceSimilarityOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        source: {
          type: string;
          minLength: number;
        };
        sentences: {
          type: string;
          items: {
            type: string;
            minLength: number;
          };
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      items: {
        type: string;
      };
    };
  };
  constructor(inputs: AiSentenceSimilarityInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiSpeechRecognitionInput = {
  audio: number[];
};
declare type AiSpeechRecognitionOutput = {
  text?: string;
  words?: {
    word: string;
    start: number;
    end: number;
  }[];
  vtt?: string;
};
declare class AiSpeechRecognition implements AiTask {
  private modelSettings;
  inputs: AiSpeechRecognitionInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiSpeechRecognitionOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      oneOf: (
        | {
            type: string;
            format: string;
            properties?: undefined;
          }
        | {
            type: string;
            properties: {
              audio: {
                type: string;
                items: {
                  type: string;
                };
              };
            };
            format?: undefined;
          }
      )[];
    };
    output: {
      type: string;
      contentType: string;
      properties: {
        text: {
          type: string;
        };
        word_count: {
          type: string;
        };
        words: {
          type: string;
          items: {
            type: string;
            properties: {
              word: {
                type: string;
              };
              start: {
                type: string;
              };
              end: {
                type: string;
              };
            };
          };
        };
        vtt: {
          type: string;
        };
      };
      required: string[];
    };
  };
  constructor(inputs: AiSpeechRecognitionInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiSummarizationInput = {
  input_text: string;
  max_length?: number;
};
declare type AiSummarizationOutput = {
  summary: string;
};
declare class AiSummarization implements AiTask {
  private modelSettings;
  inputs: AiSummarizationInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiSummarizationOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        input_text: {
          type: string;
          minLength: number;
        };
        max_length: {
          type: string;
          default: number;
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      properties: {
        summary: {
          type: string;
        };
      };
    };
  };
  constructor(inputs: AiSummarizationInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiTextClassificationInput = {
  text: string;
};
declare type AiTextClassificationOutput = {
  score?: number;
  label?: string;
}[];
declare class AiTextClassification implements AiTask {
  private modelSettings;
  inputs: AiTextClassificationInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiTextClassificationOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        text: {
          type: string;
          minLength: number;
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      items: {
        type: string;
        properties: {
          score: {
            type: string;
          };
          label: {
            type: string;
          };
        };
      };
    };
  };
  constructor(inputs: AiTextClassificationInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiTextEmbeddingsInput = {
  text: string | string[];
};
declare type AiTextEmbeddingsOutput = {
  shape: number[];
  data: number[][];
};
declare const chunkArray: (arr: any, size: number) => any;
declare class AiTextEmbeddings implements AiTask {
  private modelSettings;
  inputs: AiTextEmbeddingsInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiTextEmbeddingsOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        text: {
          oneOf: (
            | {
                type: string;
                minLength: number;
                items?: undefined;
                maxItems?: undefined;
              }
            | {
                type: string;
                items: {
                  type: string;
                  minLength: number;
                };
                maxItems: number;
                minLength?: undefined;
              }
          )[];
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      properties: {
        shape: {
          type: string;
          items: {
            type: string;
          };
        };
        data: {
          type: string;
          items: {
            type: string;
            items: {
              type: string;
            };
          };
        };
      };
    };
  };
  constructor(inputs: AiTextEmbeddingsInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type RoleScopedChatInput = {
  role: string;
  content: string;
};
declare type AiTextGenerationInput = {
  prompt?: string;
  raw?: boolean;
  stream?: boolean;
  max_tokens?: number;
  messages?: RoleScopedChatInput[];
};
declare type AiTextGenerationOutput =
  | {
      response?: string;
    }
  | ReadableStream;
declare class AiTextGeneration implements AiTask {
  private modelSettings;
  inputs: AiTextGenerationInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiTextGenerationOutput | ReadableStream;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      oneOf: (
        | {
            properties: {
              prompt: {
                type: string;
                minLength: number;
                maxLength: number;
              };
              raw: {
                type: string;
                default: boolean;
              };
              stream: {
                type: string;
                default: boolean;
              };
              max_tokens: {
                type: string;
                default: number;
              };
              lora: {
                type: string;
              };
              messages?: undefined;
            };
            required: string[];
          }
        | {
            properties: {
              messages: {
                type: string;
                items: {
                  type: string;
                  properties: {
                    role: {
                      type: string;
                    };
                    content: {
                      type: string;
                      maxLength: number;
                    };
                  };
                  required: string[];
                };
              };
              stream: {
                type: string;
                default: boolean;
              };
              max_tokens: {
                type: string;
                default: number;
              };
              prompt?: undefined;
              raw?: undefined;
              lora?: undefined;
            };
            required: string[];
          }
      )[];
    };
    output: {
      oneOf: (
        | {
            type: string;
            contentType: string;
            properties: {
              response: {
                type: string;
              };
            };
            format?: undefined;
          }
        | {
            type: string;
            contentType: string;
            format: string;
            properties?: undefined;
          }
      )[];
    };
  };
  constructor(inputs: AiTextGenerationInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
  postProcessingStream(
    response: any,
    inclen: any
  ): {
    response: any;
  };
}
declare type AiTextToImageInput = {
  prompt: string;
  image?: number[];
  mask?: number[];
  num_steps?: number;
  strength?: number;
  guidance?: number;
};
declare type AiTextToImageOutput = Uint8Array;
declare class AiTextToImage implements AiTask {
  private modelSettings;
  inputs: AiTextToImageInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiTextToImageOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        prompt: {
          type: string;
          minLength: number;
        };
        image: {
          type: string;
          items: {
            type: string;
          };
        };
        mask: {
          type: string;
          items: {
            type: string;
          };
        };
        num_steps: {
          type: string;
          default: number;
          maximum: number;
        };
        strength: {
          type: string;
          default: number;
        };
        guidance: {
          type: string;
          default: number;
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      format: string;
    };
  };
  constructor(inputs: AiTextToImageInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  OldgenerateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare type AiTranslationInput = {
  text: string;
  target_lang: string;
  source_lang?: string;
};
declare type AiTranslationOutput = {
  translated_text?: string;
};
declare class AiTranslation implements AiTask {
  private modelSettings;
  inputs: AiTranslationInput;
  preProcessedInputs: any;
  postProcessedOutputs: AiTranslationOutput;
  tensors: Array<Tensor<any>>;
  schema: {
    input: {
      type: string;
      properties: {
        text: {
          type: string;
          minLength: number;
        };
        source_lang: {
          type: string;
          default: string;
        };
        target_lang: {
          type: string;
        };
      };
      required: string[];
    };
    output: {
      type: string;
      contentType: string;
      properties: {
        translated_text: {
          type: string;
        };
      };
    };
  };
  constructor(inputs: AiTranslationInput, modelSettings: any);
  preProcessing(): void;
  generateTensors(preProcessedInputs: any): any;
  postProcessing(response: any): void;
}
declare const mustacheParse: any;
declare const mustacheRender: any;
declare const generateTgKeys: (
  parsed: any,
  messages: any
) => {
  messages: any[];
};
declare const generateTgTemplateRaw: (messages: any, template: string) => any;
declare const generateTgTemplate: (messages: any, templateName: string) => any;
declare const getUsedRoles: (parsed: any) => any;
declare const defaultContexts: {
  chat: string;
  code: string;
  function: string;
};
declare const defaultPromptMessages: (
  context: string,
  prompt: string
) => {
  role: string;
  content: string;
}[];
declare const vLLMGenerateTensors: (
  preProcessedInputs: any
) => Tensor<TensorType.String>[];
declare const tgiPostProc: (response: any, ignoreTokens?: any) => any;
declare const defaultTriton: (options: any) => any;
declare const defaultvLLM: (options: any) => any;
declare const defaultTGI: (
  promptTemplate: string,
  defaultContext: string,
  ignoreTokens?: any
) => {
  type: string;
  inputsDefaultsStream: {
    max_tokens: number;
  };
  inputsDefaults: {
    max_tokens: number;
  };
  preProcessingArgs: {
    promptTemplate: string;
    defaultContext: string;
    defaultPromptMessages: (
      context: string,
      prompt: string
    ) => {
      role: string;
      content: string;
    }[];
  };
  postProcessingFunc: (r: any, inputs: any) => any;
  postProcessingFuncStream: (r: any, inputs: any, len: number) => any;
};
declare const postFuncQwen: (response: any, inputs: any) => any;
declare const postFuncLabelScore: (
  r: any,
  inputs: any
) => {
  label: string;
  score: any;
}[];
declare const postFuncWhisper: (
  response: any,
  inputs: any
) => {
  text: any;
  word_count: number;
  words: any;
  vtt: string;
};
declare const postFuncWhisperTiny: (
  response: any,
  inputs: any
) => {
  text: any;
  word_count: number;
  words: any;
  vtt: string;
};
/**
 * modelMappings is where it all starts. This groups the available models by task type and provides the class to instantiate them.
 * Once the models are configured here, you can use them with the Ai SDK in Workers/Pages and with the REST API.
 * However, in order for them to show up in Wrangler, the Dashboard and the DevDocs, you need to add them to the config-api as well.
 */
/**
 * modelAliases is where we define model aliases. This is useful when a model is renamed or we want to upgrade it to a
 * newer version that is compatible with the older one.
 * The key of the object is always the model that Workers AI uses internally that is defined in modelMappings.
 */
declare const modelAliases: {
  "@hf/mistral/mistral-7b-instruct-v0.2": string[];
};
declare enum TensorType {
  String = "str",
  Bool = "bool",
  Float16 = "float16",
  Float32 = "float32",
  Int16 = "int16",
  Int32 = "int32",
  Int64 = "int64",
  Int8 = "int8",
  Uint16 = "uint16",
  Uint32 = "uint32",
  Uint64 = "uint64",
  Uint8 = "uint8",
}
declare type TensorOpts = {
  shape?: number[];
  name?: string;
  validate?: boolean;
};
declare type TensorsObject = {
  [name: string]: Tensor<any>;
};
declare const TypedArrayProto: any;
declare function isArray(value: any): boolean;
declare function arrLength(obj: any): any;
declare function ensureShape(shape: number[], value: any): void;
declare function ensureType(type: TensorType, value: any): void;
declare function serializeType(type: TensorType, value: any): any;
declare function deserializeType(type: TensorType, value: any): any;
declare class Tensor<T extends TensorType> {
  type: T;
  value: any | any[];
  name: string | null;
  shape: number[];
  constructor(type: T, value: any | any[], opts?: TensorOpts);
  static fromJSON(obj: any): Tensor<any>;
  toJSON(): {
    type: T;
    shape: number[];
    name: string;
    value: any;
  };
}
declare function b64ToArray(
  base64: string,
  type: string
): Int32Array | Float32Array | Float64Array | BigInt64Array;
declare const resnetLabels: string[];
declare const tgTemplates: {
  bare: string;
  chatml: string;
  deepseek: string;
  falcon: string;
  gemma: string;
  "hermes2-pro": string;
  inst: string;
  llama2: string;
  "mistral-instruct": string;
  "openchat-alt": string;
  openchat: string;
  "orca-hashes": string;
  "phi-2": string;
  sqlcoder: string;
  starling: string;
  tinyllama: string;
  zephyr: string;
};
declare type SessionOptions = {
  extraHeaders?: object;
};
declare type AiOptions = {
  debug?: boolean;
  prefix?: string;
  extraHeaders?: object;
  sessionOptions?: SessionOptions;
};
declare class InferenceUpstreamError extends Error {
  constructor(message: string);
}
declare class Ai {
  private readonly fetcher;
  private options;
  private logs;
  lastRequestId: string | null;
  constructor(fetcher: Fetcher);
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  run<M extends ModelName>(
    model: M,
    inputs: ConstructorParametersForModel<M>,
    options?: AiOptions
  ): Promise<GetPostProcessedOutputsType<M>>;
  getLogs(): Array<string>;
}
declare type ModelMappings = typeof modelMappings;
declare type GetModelName<T> = {
  [K in keyof T]: T[K] extends {
    models: readonly (infer U)[];
  }
    ? U
    : never;
}[keyof T];
declare type ModelName = GetModelName<ModelMappings>;
declare type GetModelClass<M extends ModelName, T> = {
  [K in keyof T]: T[K] extends {
    models: readonly string[];
    class: infer C;
  }
    ? M extends T[K]["models"][number]
      ? C
      : never
    : never;
}[keyof T];
declare type ConstructorParametersForModel<M extends ModelName> =
  ConstructorParameters<GetModelClass<M, ModelMappings>>[0];
declare type GetModelClassType<M extends ModelName> = {
  [K in keyof ModelMappings]: M extends ModelMappings[K]["models"][number]
    ? ModelMappings[K]["class"]
    : never;
}[keyof ModelMappings];
declare type GetModelInstanceType<M extends ModelName> = InstanceType<
  GetModelClassType<M>
>;
declare type GetPostProcessedOutputsType<M extends ModelName> =
  GetModelInstanceType<M>["postProcessedOutputs"];
