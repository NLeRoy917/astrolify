import { FirebaseAuthConsumer } from "@react-firebase/auth"

const Profile = () => {
    return (
      <>
       <FirebaseAuthConsumer>
         {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
       </FirebaseAuthConsumer>
      </>
    )
}

export default Profile;