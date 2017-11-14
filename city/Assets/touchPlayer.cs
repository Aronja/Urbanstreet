using UnityEngine;

public class touchPlayer : MonoBehaviour
{
    public float thrust;
    public Rigidbody rb;
		public Transform Target;
    public float positionx;
    public float positionz;
    public float rotationx;
    public float rotationy;



void OnCollisionEnter(Collision col)    {
	this.transform.rotation = Quaternion.Euler(rotationx, rotationy, 90);
	print(transform.rotation);

	transform.position = new Vector3(positionx, 0.5f, positionz);
			 print(transform.position);
}

    void FixedUpdate()
    {

    }
}
