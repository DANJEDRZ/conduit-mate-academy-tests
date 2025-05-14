import { expect, Response } from "@playwright/test";

export default class Assertions {

    static async assertResponseCodeIs(responsePromise: Promise<Response>, expectedCode: number) {
        const response = await responsePromise;
        expect(response.status()).toBe(expectedCode);
    }
}