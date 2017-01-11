package com.crm.cp.utils;

import java.io.UnsupportedEncodingException;

public class Encoder {

	public static String isoToEuc(String tmp){
		String euc = "";
		try {
			if(tmp != null)
				euc = new String(tmp.getBytes("ISO-8859-1"), "EUC-KR");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return euc;
	}
	
	public static String isoToUtf(String tmp){
		String utf = "";
		try {
			if(tmp != null)
				utf = new String(tmp.getBytes("ISO-8859-1"), "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return utf;
	}
}
