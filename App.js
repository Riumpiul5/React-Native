import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Contact from './components/Kontak';

const contacts = [
  {
    id: 1,
    gambar: require('./assets/leonardo.jpg'),
    judul: 'Rian Hidayatulloh',
    telpon: '085759380338',
    detail: 'Leonardo adalah seorang aktor dan produser film Amerika.',
  },
  {
    id: 2,
    gambar: require('./assets/tin.jpg'),
    judul: 'Tin',
    telpon: '085759380339',
    detail: 'Tin adalah seorang teman baik dan pengusaha muda.',
  },
  {
    id: 3,
    gambar: require('./assets/Dea.jpg'),
    judul: 'Dea',
    telpon: '085859433505',
    detail: 'Dea adalah seorang actor muda.',
  },
   {
    id: 4,
    gambar: require('./assets/Anggi.jpeg'),
    judul: 'Anggi',
    telpon: '085756766435',
    detail: 'Dea adalah seorang Selebgram .',
  },
];

export default function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <View style={styles.container}>
      {selectedContact ? (
        <View>
          <Image source={selectedContact.gambar} style={styles.image} />
          <Text style={styles.title}>{selectedContact.judul}</Text>
          <Text style={styles.phone}>{selectedContact.telpon}</Text>
          <Text style={styles.detail}>{selectedContact.detail}</Text>
          <Button title="Kembali" onPress={() => setSelectedContact(null)} />
        </View>
      ) : (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            gambar={contact.gambar}
            judul={contact.judul}
            telpon={contact.telpon}
            detail={contact.detail}
            onPress={() => setSelectedContact(contact)}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    marginBottom: 20,
  },
});
