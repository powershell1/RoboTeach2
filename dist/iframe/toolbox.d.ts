/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export declare const toolbox: {
    kind: string;
    contents: ({
        kind: string;
        name: string;
        categorystyle: string;
        contents: ({
            kind: string;
            type: string;
            inputs?: undefined;
        } | {
            kind: string;
            type: string;
            inputs: {
                SECONDS: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
                TONE?: undefined;
                MOTOR?: undefined;
            };
        } | {
            kind: string;
            type: string;
            inputs: {
                TONE: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
                SECONDS?: undefined;
                MOTOR?: undefined;
            };
        } | {
            kind: string;
            type: string;
            inputs: {
                MOTOR: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
                SECONDS?: undefined;
                TONE?: undefined;
            };
        })[];
    } | {
        kind: string;
        name: string;
        categorystyle: string;
        contents: {
            kind: string;
            type: string;
            inputs: {
                TIMES: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
            };
        }[];
    } | {
        kind: string;
        name: string;
        categorystyle: string;
        contents: ({
            kind: string;
            type: string;
            fields: {
                NUM: number;
            };
            inputs?: undefined;
        } | {
            kind: string;
            type: string;
            inputs: {
                A: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
                B: {
                    shadow: {
                        type: string;
                        fields: {
                            NUM: number;
                        };
                    };
                };
            };
            fields?: undefined;
        })[];
    })[];
};
//# sourceMappingURL=toolbox.d.ts.map