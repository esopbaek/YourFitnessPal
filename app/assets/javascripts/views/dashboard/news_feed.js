window.App.Views.NewsFeedView = Backbone.CompositeView.extend({
  className: 'news-feed',
	initialize: function(options) {
		this.user = options.user,
		this.currentUser = options.currentUser
	},
  render: function(){
    this.renderLayout();
		this.renderForm();
		this.renderList();
    return this;
  },

  renderLayout: function() {
    this.$el.html(JST["dashboard/news_feed"]());
  },

  renderForm: function() {
    var postsNew = new App.Views.PostsNew({
    	user: this.user,
			currentUser: this.currentUser
    });
		this.appendChild(postsNew);
  },

  renderList: function() {
    var postsList = new window.App.Views.PostsIndex({
    	user: this.user,
			currentUser: this.currentUser,
      collection: App.Collections.posts,
    })
    this.appendChild(postsList);
  }
})