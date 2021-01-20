import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();

fs.readdir(__dirname, (err, dirs) => {
    if (err) throw err; 
    dirs.forEach((dir) => {
        if(dir != 'index.js'){
            fs.readdir(path.join(__dirname, dir), (error, files) => {
                if (error) throw error;
                files.forEach((file) => router.use('/' + dir, require(path.join(__dirname, dir, file))));
            })
        }
    });
});

//export default router;