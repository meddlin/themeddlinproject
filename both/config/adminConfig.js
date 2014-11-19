
/*Customization
icon -- FontAwesome icon codes, leave off the "fa-" at the beginning of the code
*/

var AdminConfig;
AdminConfig =
{
  name: Config.name,
  adminEmails: ['user1@email.com', 'admin@email.com'],
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
      icon: 'exchange',
      tableColumns: [
        {label: 'IPv4', name: 'ipv4Addr'},
        {label: 'IPv6', name: 'ipv6Addr'},
        {label: 'MAC', name: 'macAddr'},
        {label: 'NIC Vendor', name: 'nicVendor'},
        {label: 'Ports', name: 'ports'},
        {label: 'OS Fingerprint', name: 'osFingerprint'},
        {label: 'Region', name: 'region'},
        {label: 'Country', name: 'country'},
        {label: 'Latitude', name: 'latitude'},
        {label: 'Longitude', name: 'longitude'}
      ]
    },
    TOperatingSystems: {
      icon: 'users'
    },
    TSoftwares: {
      icon: 'users',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created On', name: 'createdAt'},
        {label: 'Updated On', name: 'updatedOn'}
      ]
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
  }/*,
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  }*/
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
    }
*/