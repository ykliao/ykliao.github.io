PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "cassiopeia_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 154.56363145095924,
	        "maxtilt": 43.41791334701363,
	        "minpan": 0,
	        "mintilt": -47.044123940206084
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":20090,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":628,"width":34326},{"height":10045,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":628,"width":17163},{"height":5023,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":628,"width":8582},{"height":2512,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":628,"width":4291},{"height":1256,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":628,"width":2146},{"height":628,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":628,"width":1073}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}