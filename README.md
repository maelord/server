**Title**
----
  Maelord Mini-Quiz

* **URL**

  /upload

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "hero": {
        "image": "https://www.superherodb.com/pictures2/portraits/10/100/51.jpg",
        "fullname": "Tandy Bowen",
        "universe": "Marvel Comics",
        "occupation": "Vigilante"
        } 
    }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
        "message": "Cannot read property 'cloudStoragePublicUrl' of undefined",
        "error": {} 
        }`


* **Sample Call:**


  ```
  axios
        .post("http://35.198.203.100/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(({data})=> {
          this.resultimg = data
          console.log(data)
          console.log("SUCCESS!!");
        })
        .catch((err) =>{
       console.log("FAILURE!!");
        });

