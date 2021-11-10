module.exports = {
    test_settings : {
        default : {
            launch_url : `${process.env.HOST}:${process.env.PORT}`,
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
