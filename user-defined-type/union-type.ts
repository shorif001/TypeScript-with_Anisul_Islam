let userIds: (string | number | boolean);

userIds = "101";
userIds = 101;
userIds = true;



function displayUserInfo(userId:string | number | boolean){
    console.log(userId);
}
displayUserInfo('string value');
displayUserInfo(101);
displayUserInfo(true);