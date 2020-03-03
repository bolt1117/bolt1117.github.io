class BoltBlocks {
    getInfo() {
        return {
            "id": "BoltBlocks",
            "name": "BoltBlocks",
            "blocks": [{
                "opcode": "reporter",
                "blockType": "reporter",
                "text": "report [text]",
                "arguments": {
                    "text": {
                        "type": "string",
                        "defaultValue": "Hello world!"
                    }
                }
            }],
            "menus": {},
        }
    };
    reporter({text}) {
        return text;
    };
}
Scratch.extensions.register(new BoltBlocks());
