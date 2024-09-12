"use client"

import { toast } from "sonner";

const apiUploadProfilePicture = async (file: File) => {
  const bearerToken = localStorage.getItem('bearerToken');
  console.log("Token :", bearerToken);
  
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/profile-picture/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      },
      body: formData,
    });

    if (!response.ok)
      throw new Error(`Failed to upload the profile picture. Status: ${response.status}`);


    const data = await response.json();
    toast.success(data.message || "Profile picture uploaded successfully!");
    
  } catch (error: any) {
    toast.error(error.message || "An error occurred while uploading the profile picture.");
  }
};

const apiDeleteProfilePicture = async () => {
  const bearerToken = localStorage.getItem('bearerToken');
  console.log("Token :", bearerToken);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account/profile-picture/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
      },
    });

    if (!response.ok)
      throw new Error(`Failed to delete the profile picture. Status: ${response.status}`);

    const data = await response.json();
    toast.success(data.message || "Profile picture deleted successfully!");

  } catch (error: any) {
    toast.error(error.message || "An error occurred while deleting the profile picture.");
  }
};

export { apiUploadProfilePicture, apiDeleteProfilePicture };
