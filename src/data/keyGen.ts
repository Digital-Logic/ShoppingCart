import { buildUniqueKeyGen, buildKeyGen } from "@/utils";

const ID_LENGTH = 16;
const idGen = buildUniqueKeyGen(
    buildKeyGen(ID_LENGTH)
);

const idMather = new RegExp(`/^[0-9,a-z,A-Z]{${ID_LENGTH}}$`);
function isID(id: string) {
    return Boolean(id.match(idMather));
}

const SKU_LENGTH = 32;
// sku - number only keys
const skuGen = buildUniqueKeyGen(
    buildKeyGen(SKU_LENGTH, '0123456789')
);
const skuMatcher = new RegExp(`/^[0-9]{${SKU_LENGTH}}$`);

function isSku(sku: string) {
    return Boolean(sku.match(skuMatcher));
}


export {
    idGen,
    skuGen,
    isSku,
    isID
};