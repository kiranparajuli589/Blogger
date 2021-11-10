module.exports = {
    test_settings : {
        default : {
            launch_url : 'http://localhost:3001',
            selenium: {
                start_process : false,
                port : 4444,
                host : 'localhost'
            },
            desiredCapabilities : {
                browserName: 'firefox'
            }
        }
    }
}
