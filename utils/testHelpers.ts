import { Response } from '@playwright/test';

export default class TestHelpers {
    static async extractFromResponse(responsePromise: Promise<Response>, path: string): Promise<any> {
        const response = await responsePromise;
        const body = await response.json();
        const keys = path.split('.');
        let result_1 = body;
        for (const key of keys) {
            if (result_1 && key in result_1) {
                result_1 = result_1[key];
            } else {
                return null;
            }
        }
        return result_1;
    }
}