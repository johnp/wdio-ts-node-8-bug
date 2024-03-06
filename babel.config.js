// It doesn't really matter if babel is "enabled" or not; Webdriver.IO already
// fails when it eagerly tries to use ts-node v8 before trying to use babel.
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": 20
                }
            }
        ]
    ]
}
