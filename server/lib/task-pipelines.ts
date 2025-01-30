export const statsPipeline = [
  {
    '$project': {
      'startDate': 1, 
      'endDate': 1, 
      'status': 1, 
      '_id': 0
    }
  }, {
    '$addFields': {
      'currentDate': {
        '$toDate': new Date()
      }, 
      'overdue': {
        '$cond': [
          {
            '$and': [
              {
                '$lt': [
                  '$endDate', {
                    '$toDate': new Date()
                  }
                ]
              }, {
                '$ne': [
                  '$status', 'completed'
                ]
              }
            ]
          }, 'overdue', '$status'
        ]
      }
    }
  }, {
    '$group': {
      '_id': '$overdue', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'actualCounts': {
        '$push': {
          'k': '$_id', 
          'v': '$count'
        }
      }
    }
  }, {
    '$project': {
      'combined': {
        '$arrayToObject': {
          '$setUnion': [
            '$actualCounts', [
              {
                'k': 'not-started', 
                'v': 0
              }, {
                'k': 'in-progress', 
                'v': 0
              }, {
                'k': 'completed', 
                'v': 0
              }, {
                'k': 'overdue', 
                'v': 0
              }
            ]
          ]
        }
      }
    }
  }, {
    '$project': {
      'countsArray': {
        '$objectToArray': '$combined'
      }
    }
  }, {
    '$unwind': '$countsArray'
  }, {
    '$project': {
      '_id': 0, 
      'status': '$countsArray.k', 
      'count': '$countsArray.v'
    }
  }
]