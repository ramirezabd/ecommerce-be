import app from "./api/index.js";

const PORT = process.env.PORT || 88;

app.listen(PORT, () => console.log(`Server is listenin on port ${PORT}`));
