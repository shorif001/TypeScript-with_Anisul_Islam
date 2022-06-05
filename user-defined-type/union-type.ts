let userIdsss: (string | number | boolean);

userIdsss = "101";
userIdsss = 101;
userIdsss = true;



function displayUserInfoo(userId:string | number | boolean){
    console.log(userId);
}
displayUserInfoo('string value');
displayUserInfoo(101);
displayUserInfoo(true);