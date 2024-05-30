let nftCollection = [];

function mintNFT(name, pose, specialEffect, companion) {
    const nft = {
        name: name,
        pose: pose,
        specialEffect: specialEffect,
        companion: companion,
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("ID: " + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Pose: " + nftCollection[i].pose);
        console.log("Special Effect: " + nftCollection[i].specialEffect);
        console.log("Companion: " + nftCollection[i].companion);
        
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("ram", "Standing", "Glow", "Dog");
mintNFT("shyam", "Sitting", "Shadow", "Cat");
mintNFT("honey", "Dancing", "Sparkles", "Robot");

listNFTs();

console.log("Total  NFTs are: " + getTotalSupply());
