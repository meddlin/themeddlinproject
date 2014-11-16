/*
Customization
icon -- FontAwesome icon codes, leave off the "fa-" at the beginning of the code
*/

var AdminConfig;
AdminConfig =
{
  name: Config.name,
  collections: {
    NetworkTools: {
      icon: 'sitemap'
    },
    OperatingSystems: {
      icon: 'desktop'
    },
    Softwares: {
      icon: 'cubes'
    },
    THosts: {
      icon: 'exchange'
    },
    TOperatingSystems: {
      icon: 'users'
    },
    TSoftwares: {
      icon: 'users'
    },
    TUsers: {
      icon: 'users'
    },
    Targets: {
      icon: 'database'
    },
    Chat: {
      icon: 'comments'
    },
    RecentActivity: {
      icon: 'list'
    },
    MimeUpload: {
      icon: 'cloud-upload'
    },
    UserDataLogs: {
      icon: 'tasks'
    },
  },
  dashboard: {
    homeUrl: '/dashboard',
    skin: "black"
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }
};

if (Meteor.isClient) {
  window.AdminConfig = AdminConfig;
} else if (Meteor.isServer) {
  global.AdminConfig = AdminConfig;
}

/*Posts: {
      color: 'red',
      icon: 'pencil',
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    },
    Comments: {
      color: 'green',
      icon: 'comments',
      auxCollections: ['Posts'],
      tableColumns: [
        {
          label: 'Content',
          name: 'content'
        }, {
          label: 'Post',
          name: 'doc',
          collection: 'Posts',
          collection_property: 'title'
        }, {
          label: 'User',
          name: 'owner',
          collection: 'Users'
        }
      ]
    }*/