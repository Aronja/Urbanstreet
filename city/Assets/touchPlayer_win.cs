using UnityEngine;
using System.Collections;
using UnityStandardAssets.Characters.ThirdPerson;


public class touchPlayer_win : MonoBehaviour
{
    public float thrust;
    public Rigidbody rb;
		public Transform Target;
    public float positionx;
    public float positionz;

		public GameObject YouWinText;
    public GameObject M3DFemale;

    private bool hasJumped = false;

    IEnumerator TestCoroutine(){
      //  yield return new WaitForSeconds(1);
        M3DFemale.GetComponent<ThirdPersonCharacter>().Move(Vector3.zero, false, true);
        yield return new WaitForSeconds(1.5f);
        M3DFemale.GetComponent<ThirdPersonCharacter>().Move(Vector3.zero * -1, false, true);
        yield return new WaitForSeconds(1.5f);
        M3DFemale.GetComponent<ThirdPersonCharacter>().Move(Vector3.zero * -1, false, true);
        hasJumped = true;

         // produces a dead code warning
      }



	void OnCollisionEnter(Collision col)
{
		this.transform.rotation = Quaternion.Euler(90, 90, 0);
		print(transform.rotation);

		transform.position = new Vector3(positionx, 0.5f, positionz);
		print(transform.position);

		YouWinText.SetActive(true);
    if(!hasJumped) {
      StartCoroutine(TestCoroutine());
    }




		if (Input.GetKeyDown(KeyCode.Escape))
			print ("Application should quit now!");
			//Application.Quit();

		}

}
