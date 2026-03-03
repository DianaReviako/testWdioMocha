async function fetchUserData() {
    console.log("Fetching user data...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched successfully!");
            resolve([{ name: "Alice", age: 30 }]);
        }, 2000); // Simulate a 2-second delay
    });
}


async function fetchUserPosts() {
    console.log("Fetching user posts...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User posts fetched successfully!");
            resolve([{ title: "Post 1" }, { title: "Post 2" }]);
        }, 1500); // Simulate a 1.5-second delay
    });
}


// run sequentially
async function runSequentially() {
    const userData = await fetchUserData();
    console.log("User Data:", userData);

    const userPosts = await fetchUserPosts();
    console.log("User Posts:", userPosts);
}

// runSequentially();


//run in parallel
async function runInParallel() {
    const [userData, userPosts] = await Promise.all([
        fetchUserData(), // Запускается параллельно
        fetchUserPosts() // Запускается параллельно
    ]);

    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
}

runInParallel();