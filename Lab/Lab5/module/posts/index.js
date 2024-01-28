export class BaseAPI{
  constructor(baseUrl){
      this.baseUrl= baseUrl;
  }
  async get(endpoint){
    const response = await fetch(`${this.baseUrl}/${endpoint}`)
    const data = await response.json();
    return data;
     
 }
 async post(endpoint, body) {
   const response = await fetch(`${this.baseUrl}/${endpoint}`, {
     method: 'POST',
     headers: {'Content-Type': 'application/json',},
     body: JSON.stringify(body)
 });
     const data = await response.json();
     return data;
 }
 
 async put(endpoint, body) {
   const response = await fetch(`${this.baseUrl}/${endpoint}`, {
     method: 'PUT',
     headers: {'Content-Type': 'application/json',},
     body: JSON.stringify(body),
   });
   const data = await response.json();
   return data;
}

async delete(endpoint) {
   const response = await fetch(`${this.baseUrl}/${endpoint}`, {
     method: 'DELETE',
   });
     const data = await response.json();
     return data;
} 
}
  
export class Post extends BaseAPI {
    constructor(baseUrl) {
      super(baseUrl)
      this.endpoint = 'posts';
    }
  
    async getAll() {
      const posts = await this.get(this.endpoint);
      return posts;
    }
  
    async getOne(postId) {
      const post = await this.get(`${this.endpoint}/${postId}`);
        return post;
    }
    async create(post) {
      const createdPost = await this.post(this.endpoint, post);
      return createdPost;
  }

  async update(postId, updatePost) {
      const updatedPost = await this.put(`${this.endpoint}/${postId}`, updatePost);
      return updatedPost;
  }

  // async delete(postId) {
  //     const deletedPost = await this.delete(`${this.endpoint}/${postId}`);
  //     return deletedPost; 
  // }
  async delete(postId) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.endpoint}/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Post deletion failed with status: ${response.status}`);
      }
      const deletedPost = await response.json();  
      return deletedPost;
    } catch (error) {
      console.error('Post deletion failed:', error);
      throw error;
    }
  }
  }