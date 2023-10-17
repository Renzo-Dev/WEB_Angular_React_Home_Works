const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',   // главный файл для index.html
        task2: './src/js/task2.js',   // главный файл для Task2.html
        task3: './src/js/task3.js'    // главный файл для Task2.html
    },
    output: {
        filename: '[name].bundle.js', // Используйте [name] для динамического имени файла
        path: __dirname + '/dist'     // Путь к директории вывода
        // два чанка ( главных файла ) не могут использовать один ихсодный бандл
        // filename: 'bundle.js',
        // path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        // Плагин для index.html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'], // определение чанка ( JS файла для html )
        }),

        // Плагин для Task2.html
        new HtmlWebpackPlugin({
            template: './src/Task2.html',
            filename: 'Task2.html',
            chunks: ['task2'],
        }),

        new HtmlWebpackPlugin({
            template: './src/Task3.html',
            filename: 'Task3.html',
            chunks: ['task3'],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
    },
};
