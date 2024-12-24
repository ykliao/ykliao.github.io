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
	        "maxpan": 173.048128342246,
	        "maxtilt": 51.64615767067528,
	        "minpan": 0,
	        "mintilt": -52.31106158066166
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":23095,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":480,"width":38444},{"height":11548,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":480,"width":19222},{"height":5774,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":480,"width":9611},{"height":2887,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":480,"width":4806},{"height":1444,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":480,"width":2403},{"height":722,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":480,"width":1202},{"height":361,"src":"cassiopeia_tiles/cassiopeia_t_7_%0y_%0x.jpg","tilesize":480,"width":601}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}