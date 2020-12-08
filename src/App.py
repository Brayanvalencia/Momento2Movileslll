from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/apimomento2'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.cites

#agregar las citas
@app.route('/addcite', methods=['POST'])
def addCite():
    id = db.insert({
        'name': request.json['name'],
        'lastname': request.json['lastname'],
        'document': request.json['document'],
        'birthdate': request.json['birthdate'],
        'city': request.json['city'],
        'phone': request.json['phone']

    })
    return jsonify(str(ObjectId(id)))

#Editar Citas(Actualizar)
@app.route('/addcite/<id>', methods=['PUT'])
def updateCite(id):
    db.update_one({'_id': ObjectId(id)}, {'$set':{
        'name': request.json['name'],
        'lastname': request.json['lastname'],
        'document': request.json['document'],
        'birthdate': request.json['birthdate'],
        'city': request.json['city'],
        'phone': request.json['phone']
    }})
    return jsonify({'message': 'Cite Update'})

#Eliminar Citas
@app.route('/addcite/<id>', methods=['DELETE'])
def deleteCite(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'message': 'Cite Deleted'})

#Listar las citas
@app.route('/addcite', methods=['GET'])
def getCite():
    cites = []
    for doc in db.find():
        cites.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'lastname': doc['lastname'],
            'document': doc['document'],
            'birthdate': doc['birthdate'],
            'city': doc['city'],
            'phone': doc['phone']
        })
    return jsonify(cites)

if __name__ == "__main__":
    app.run(debug=True)