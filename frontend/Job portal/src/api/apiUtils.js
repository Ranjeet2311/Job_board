export const fetchjobs = async () => {
  const response = await fetch("/api/jobs");
  if (!response.ok) {
    throw new Error("Network response was not okay");
  }
  const data = await response.json();
  console.log(`fetch data :: `, data);
  return data.data;
};

export const postJobs = async (newJob) => {
  const response = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();
  console.log(`post data :: `, data);

  return data;
};

// ---------User------------

export const userLogin = async (logInData) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInData),
    });
    if (!response.ok) {
      // Fetch doesn't automatically reject HTTP errors, so we manually throw one
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not okay");
    }
    console.log(`user fetch response : : `, response);

    const data = await response.json();
    console.log(`fetch user data :: `, data);
    if (data.success) {
      return data;
    } else {
      throw new Error(data.message || "Invalid credentials");
    }
  } catch (error) {
    console.log(`Login APiUtil : `, error.message);
    // Pass error message to the caller (createAsyncThunk in this case
    throw error;
  }
};

export const userRegister = async (newUser) => {
  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(`errorData api util : `, errorData);

      throw new Error(errorData.message || "Please complete all details");
    }
    // throw new Error("Please add all creedentials 123");
    const data = await response.json();
    console.log(`post data :: `, data);

    return data;
  } catch (error) {
    console.log(`Register APiUtil : `, error.message);
    // Pass error message to the caller (createAsyncThunk in this case
    throw error;
  }
};
