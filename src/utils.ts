import crypto from "crypto";

function buildKeySet() {
    const numbers: string = "0123456789";
    const letters: string = "abcdefghijklmnopqrstuvwxyz";
    return (numbers + letters + letters.toUpperCase());
}

const aZ01KeySet = buildKeySet();

export interface KeyGenerator {
    (): string;
}

function buildKeyGen(size: number = 32, charSet: string = buildKeySet()): KeyGenerator {
    return function() {
        const key:Array<string> = [];

        const buffer = crypto.randomBytes(size);
        for (let i of buffer) {
            key.push(charSet[i % charSet.length]);
        }
        return key.join('');
    }
}

function buildUniqueKeyGen(generator:KeyGenerator = buildKeyGen()):KeyGenerator {
    const keyCatch:Set<string> = new Set();

    return function() {
        let newKey: string;
        do {
            newKey = generator();
        } while(keyCatch.has(newKey))

        return newKey;
    }
}

// const keyGenerator = buildKeyGen();
// const uniqueKeyGenerator = buildUniqueKeyGen();


export {
    buildUniqueKeyGen,
    buildKeyGen,
    buildKeySet,
    aZ01KeySet
};