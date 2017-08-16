const smartgrid = require('smart-grid');

smartgrid('./src/less', {
    columns: 12,
    offset: "30px",
    container: {
        maxWidth: "1286px"
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "768px",
            fields: "15px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        }
    },
    oldSizeStyle: false
});