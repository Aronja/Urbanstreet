using UnityEngine;
using System.Collections;

public class controllCamera : MonoBehaviour {
	public Transform target;
	public float height;
	public float cameraDistance;


	// Use this for initialization
	void Start () {
		if (target == null) {
			Debug.LogWarning("We have no target");

		}

	}

	// Update is called once per frame
	void Update () {

	}

	void LateUpdate () {
		transform.position = new Vector3(target.position.x - cameraDistance, target.position.y + height, target.position.z);
	}
}
