from flask import Flask, jsonify,request
import pickle
import preprocessing
from textblob import TextBlob
from gensim.summarization import keywords
from gensim.summarization import summarize
import spacy

# load the model from disk
clf = pickle.load(open('nb_clf.pkl', 'rb'))
cv=pickle.load(open('tfidf_model.pkl','rb'))
app = Flask(__name__)

# Define a route that returns JSON data
@app.route('/get_json', methods=['GET'])
def get_json():
    data = {
        'message': 'Hello, World!',
        'status': 'success'
    }
    return jsonify(data)

@app.route('/analysis', methods=['POST'])
def analysis():
    if request.method == 'POST':
        data = request.get_json()
        message = data.get("message", "Default message if 'message' is not found")
        # Process the 'message' or do something with it
        text=[message]
        data = preprocessing.text_Preprocessing(text)
        vect = cv.transform(text)
        my_prediction = clf.predict(vect)
        Keywords = keywords(message)
        Keywords = 'Keywords =' + str(Keywords)
        new = Keywords.split('\n')
        newstr = ''
        for word in new:
            newstr = newstr + word + ', '
        
        overview = TextBlob(message)
        Polarity = round(overview.sentiment.polarity,2)
        Polarity = str(Polarity)
        Subjectivity = round(overview.sentiment.subjectivity,2)
        Subjectivity =  str(Subjectivity)
        print(my_prediction,newstr,Polarity,Subjectivity)
        return jsonify({"result":int(my_prediction[0]),"polarity":Polarity,"subjectivity":Subjectivity})
    

@app.route('/twitter_analysis', methods=['POST'])
def twitterText():
    return jsonify({"result":"ok"})

if __name__ == '__main__':
    app.run(debug=True)
