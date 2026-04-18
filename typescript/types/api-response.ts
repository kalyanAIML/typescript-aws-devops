interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Kalyan"
  },
  message: "User fetched successfully"
};

console.log(response);
