const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode = null;
  root() {
    if (this.rootNode) return this.rootNode;
    return null;
  }

  add(data) {
    this.rootNode = adding(this.rootNode, data);
    function adding(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) node.left = adding(node.left, data);
      else node.right = adding(node.right, data);
      return node;
    }
  }

  has(data) {
    return search(this.rootNode, data);
    function search(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) return search(node.left, data);
      else return search(node.right, data);
    }
  }

  find(data) {
    return search(this.rootNode, data);
    function search(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data < node.data) return search(node.left, data);
      else return search(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = del(this.rootNode, data);
    function del(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = del(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = del(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right; // check it
        if (!node.right) return node.left; // check it
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;
        node.data = minRight.data;
        node.right = del(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) return null;
    let minNode = this.rootNode;
    while (minNode.left) minNode = minNode.left;
    return minNode.data;
  }

  max() {
    if (!this.rootNode) return null;
    let maxNode = this.rootNode;
    while (maxNode.right) maxNode = maxNode.right;
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
