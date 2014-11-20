
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
      icon: 'desktop',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'},
        {label: 'URL', name: 'url'},
        {label: 'Developer', name: 'developer'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Approx. Size', name: 'approxSize'},
        {label: 'License', name: 'license'}
      ]
    },
    Softwares: {
      icon: 'cubes',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'},
        {label: 'URL', name: 'url'},
        {label: 'Developer', name: 'developer'},
        {label: 'Prog. Language', name: 'programingLanguage'},
        {label: 'Version', name: 'version'},
        {label: 'Platforms', name: 'platforms'},
        {label: 'Approx. Size', name: 'approxSize'},
        {label: 'License', name: 'license'}
      ]
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
        {label: 'Longitude', name: 'longitude'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TOperatingSystems: {
      icon: 'users',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TSoftwares: {
      icon: 'users',
      tableColumns: [
        {label: 'Name', name: 'name'},
        {label: 'Platform', name: 'platform'},
        {label: 'Version', name: 'version'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedAt'}
      ]
    },
    TUsers: {
      icon: 'users',
      tableColumns: [
        {label: 'First Name', name: 'fname'},
        {label: 'Middle Name', name: 'mname'},
        {label: 'Last Name', name: 'lname'},
        {label: 'Title', name: 'title'},
        {label: 'Username', name: 'username'},
        {label: 'Email', name: 'email'},
        {label: 'Password', name: 'password'},
        {label: 'Hash', name: 'passhash'},
        {label: 'PGP Key', name: 'hasPGPKey'},
        {label: 'Region', name: 'region'},
        {label: 'Country', name: 'country'},
        {label: 'Vulnerable', name: 'vuln'},
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Updated At', name: 'updatedOn'}
      ]
    },
    Targets: {
      icon: 'database'
    },
    Chat: {
      icon: 'comments',
      tableColumns: [
        {label: 'Owner', name: 'owner'},
        {label: 'Created At', name: 'createdAt'},
        {label: 'Message', name: 'message'}
      ]
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