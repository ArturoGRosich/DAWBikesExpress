class IndexController {
    static async index(req, res) {
        //return index.html not hbs, becouse I have to use pure html for the front-end
        res.sendFile('index.html', { root: './views' });
    }
}

module.exports = IndexController;