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
	        "maxpan": 125.44747081712063,
	        "maxtilt": 40.23346303501946,
	        "minpan": 0,
	        "mintilt": -30.661478599221795
	    },
	"id": "cassiopeia",
	"image":{"baseindex":1,"bitmap":[{"height":15745,"src":"cassiopeia_tiles/cassiopeia_t_1_%0y_%0x.jpg","tilesize":493,"width":27860},{"height":7873,"src":"cassiopeia_tiles/cassiopeia_t_2_%0y_%0x.jpg","tilesize":493,"width":13930},{"height":3937,"src":"cassiopeia_tiles/cassiopeia_t_3_%0y_%0x.jpg","tilesize":493,"width":6965},{"height":1969,"src":"cassiopeia_tiles/cassiopeia_t_4_%0y_%0x.jpg","tilesize":493,"width":3483},{"height":985,"src":"cassiopeia_tiles/cassiopeia_t_5_%0y_%0x.jpg","tilesize":493,"width":1742},{"height":493,"src":"cassiopeia_tiles/cassiopeia_t_6_%0y_%0x.jpg","tilesize":493,"width":871}],"multilevel":true,"preview":{"src":"cassiopeia_tiles/cassiopeia_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}