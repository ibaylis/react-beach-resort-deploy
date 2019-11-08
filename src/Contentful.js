import { createClient } from "contentful";

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN

    // space: "cuusdum19fm0",
    // accessToken: "GFQ-ECWyWA-Pelw6jDx-IgYhbB-KdCGWP5UCssP93Ek"
});
// remember to get these variables from contentful