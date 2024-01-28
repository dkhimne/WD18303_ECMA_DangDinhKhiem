export class BaseAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`)
    const data = await response.json();
    return data;

  }
  async post(endpoint, body) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }

  async put(endpoint, body) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', },
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

export class Comment extends BaseAPI {
  constructor(baseUrl) {
    super(baseUrl)
    this.endpoint = 'comments';
  }

  async getAll() {
    const comments = await this.get(this.endpoint);
    return comments;
  }

  async getOne(commentId) {
    const comment = await this.get(`${this.endpoint}/${commentId}`);
    return comment;
  }
  async create(comment) {
    const createdComment = await this.post(this.endpoint, comment);
    return createdComment;
  }

  async update(commentId, updateCmt) {
    const updatedComment = await this.put(`${this.endpoint}/${commentId}`, updateCmt);
    return updatedComment;
  }

  async delete(commentId) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.endpoint}/${commentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Comment deletion failed with status: ${response.status}`);
      }
      const deletedComment = await response.json();  
      return deletedComment;
    } catch (error) {
      console.error('Comment deletion failed:', error);
      throw error;
    }
  }
}